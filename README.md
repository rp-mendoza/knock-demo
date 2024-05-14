## Getting Started

This is a clone of https://github.com/knocklabs/notion-feed-example.git. The custom-feed utilizes the cloned work from that repo. The ootb components have been added.
This repo includes examples of ootb in app feed and notifications using the [Knock.App ](https://knock.app/) sdk cd a custom approach utilizing the knockClient.

To clone the repository locally, run this command:

```bash
git clone https://github.com/rp-mendoza/knock-demo.git
```

Then create a new `.env.local` file from the sample with this command:

```bash
cp .env.sample .env.local
```

You'll also need:

- A public API key for the Knock environment (set as NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY)
- The channel ID for the in-app feed (set as NEXT_PUBLIC_KNOCK_FEED_CHANNEL_ID)
- A Knock user ID (set as NEXT_PUBLIC_KNOCK_USER_ID)

Once you've added those values and environment variables, you can run the project locally on `http://localhost:3000`:

```bash
npm run dev
```

or to run with the local certificate run (must have a localhost-key.pem and localhost.pem): 

```bash
npm run test

npx local-ssl-proxy --key localhost-key.pem --cert localhost.pem --source 3000 --target 2999
```

