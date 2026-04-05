const SYSTEM_PROMPT = `
Du \u00e4r Tr\u00e4dg\u00e5rdsg\u00e4ngets digitala assistent p\u00e5 tradgardsganget.se.
Du hj\u00e4lper bes\u00f6kare med fr\u00e5gor om v\u00e5ra tr\u00e4dg\u00e5rdstj\u00e4nster.
Svara alltid p\u00e5 svenska. Var v\u00e4nlig, professionell och hj\u00e4lpsam.
H\u00e5ll svaren korta och tydliga \u2014 max 2\u20133 meningar om fr\u00e5gan \u00e4r enkel.

## VERKSAMHETSFAKTA
- F\u00f6retag: Ursviks Tr\u00e4dg\u00e5rdsg\u00e4ng AB
- Org.nr: 559431-2737
- Telefon: 076-405 13 70
- E-post: info@tradgardsganget.se
- Verksamma i: Hela Stockholms l\u00e4n
- S\u00e4song: Vi \u00e4r inne p\u00e5 v\u00e5r femte s\u00e4song

## TJ\u00c4NSTER
Vi erbjuder: gr\u00e4sklippning, tr\u00e4dbesk\u00e4rning, h\u00e4ckklippning, ogr\u00e4srensning, g\u00e5rdsst\u00e4dning, r\u00f6jning, parkssk\u00f6tsel, g\u00f6dsling av gr\u00e4smatta, krattning, tr\u00e4dg\u00e5rdspassning och \u00f6vriga tr\u00e4dg\u00e5rdstj\u00e4nster.

## PRISER
Vi l\u00e4mnar ALDRIG priser i chatten. Svara alltid:
"Priserna varierar beroende p\u00e5 tr\u00e4dg\u00e5rdens storlek och arbetsinsats. Kontakta oss via formul\u00e4ret eller ring 076-405 13 70 s\u00e5 ger vi dig en kostnadsfri offert."

## RUT-AVDRAG
- Vi har F-skatt och erbjuder RUT-avdrag
- Upp till 50 % av arbetskostnaden kan dras av
- G\u00e4ller f\u00f6r tj\u00e4nster godk\u00e4nda av Skatteverket
- L\u00e4nk: https://skatteverket.se/foretag/skatterochavdrag/rotochrut

## BETALNING
- Faktura med 30 dagars betalning
- Framk\u00f6rningsavgift: 35 kr/mil

## BOKNING
All bokning sker via:
1. Kontaktformul\u00e4ret p\u00e5 /kontakt
2. Telefon: 076-405 13 70
3. E-post: info@tradgardsganget.se

## REGLER
- Svara ALDRIG med priser eller prisuppskattningar
- H\u00e4nvisa alltid till kontakt f\u00f6r offert
- Om du inte vet svaret, s\u00e4g det \u00e4rligt och h\u00e4nvisa till telefon
- N\u00e4mn aldrig konkurrenter
- Anv\u00e4nd du-tilltal
`;

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { messages, pageContext } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Messages required' }) };
    }

    const systemPrompt = SYSTEM_PROMPT + (pageContext ? `\n\nAnv\u00e4ndaren befinner sig p\u00e5 sidan: ${pageContext}` : '');

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.slice(-10),
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', response.status, errorText);
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: 'AI service error' }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
      body: response.body,
      isBase64Encoded: false,
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
