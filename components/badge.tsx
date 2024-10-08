export function ChromeUsers(props: { id: string; link: string }) {
    return (
        <a
            title="Chrome extension link"
            href={props.link}
            target="_blank"
            rel="noopener">
            <img
                alt="Chrome users"
                loading="lazy"
                className="m-0"
                src={`https://flat.badgen.net/chrome-web-store/users/${props.id}?color=fb9836&icon=chrome`}
            />
        </a>
    );
}

export function ChromeVersion() {
    return (
        <a
            title="Chrome extension link"
            href="https://chrome.google.com/webstore/detail/notion-boost/eciepnnimnjaojlkcpdpcgbfkpcagahd"
            target="_blank"
            rel="noopener">
            <img
                alt="Chrome extension version"
                loading="lazy"
                className="m-0"
                src="https://flat.badgen.net/chrome-web-store/v/eciepnnimnjaojlkcpdpcgbfkpcagahd?color=fb9836&icon=chrome&label=chrome"
            />
        </a>
    );
}

export function ChromeStars(props: { id: string; link: string }) {
    return (
        <a
            title="Chrome extension link"
            href={props.link}
            target="_blank"
            rel="noopener">
            <img
                alt="Chrome extension stars"
                loading="lazy"
                className="m-0"
                src={`https://flat.badgen.net/chrome-web-store/stars/${props.id}?color=fb9836&icon=chrome`}
            />
        </a>
    );
}

const firefox = {
    title: 'Firefox addon link',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/notion-boost/',
};

export function FirefoxVersion() {
    return (
        <a
            title={firefox.title}
            href={firefox.url}
            target="_blank"
            rel="noopener">
            <img
                alt="Firefox version"
                loading="lazy"
                className="m-0"
                src="https://flat.badgen.net/amo/v/notion-boost?color=fb9836&icon=firefox&label=firefox"
            />
        </a>
    );
}

export function FirefoxUsers() {
    return (
        <a
            title={firefox.title}
            href={firefox.url}
            target="_blank"
            rel="noopener">
            <img
                alt="Firefox users"
                loading="lazy"
                className="m-0"
                src="https://flat.badgen.net/amo/users/notion-boost?color=fb9836&icon=firefox"
            />
        </a>
    );
}
