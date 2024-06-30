// seo
import {Helmet} from "react-helmet";

export const Seo = (props) => {
    return (
        // do seo for pages
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description}/>
            <meta name="keywords" content={props.keywords}/>
            <meta property="og:type" content={props.type}/>
            <meta property="og:title" content={props.title}/>
            <meta property="og:description" content={props.description}/>
            <meta property="og:keywords" content={props.keywords}/>
            <meta name="twitter:creator" content={props.name}/>
            <meta name="twitter:card" content={props.type}/>
            <meta name="twitter:title" content={props.title}/>
            <meta name="twitter:description" content={props.description}/>
            <meta name="twitter:keywords" content={props.keywords}/>
        </Helmet>
    )
}