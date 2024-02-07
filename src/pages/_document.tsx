// essa pagina represante o arquivo index/public em uma aplicação create-react-app
// nessa arquivo vão os docummentos estáticos, tudo que ira se manter independente qual tele o usuario acesse

import Document, {Html, Head, Main, NextScript} from 'next/document'
export default class Mydocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    };
}