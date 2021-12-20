type TYPE =
  | "twitter"
  | "facebook"
  | "linkedin"
  | "link"
  | "calendar"
  | "share"
  | "views";

export function Icon(Props: {
  size: string;
  type: TYPE;
  className?: string;
}): JSX.Element {
  switch (Props.type) {
    case "share":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={Props.className}
          width={Props.size}
          height={Props.size}
          fill="currentColor"
          viewBox="0 0 34 34"
        >
          <path d="M17.695 28.17c.316.148.69.104.955-.117l14.194-11.755a.897.897 0 00.323-.69.87.87 0 00-.33-.69L18.65 3.205a.889.889 0 00-.955-.117.893.893 0 00-.515.815v6.15C.907 10.64.973 22.984 1.003 28.964v.713a.89.89 0 00.896.896.916.916 0 00.786-.455c4.805-8.464 8.758-8.875 14.495-8.897v6.134c0 .346.199.662.515.816zM2.817 26.504c.081-2.608.427-5.716 1.852-8.346 2.263-4.188 6.649-6.26 13.415-6.325a.898.898 0 00.89-.897V5.807l11.879 9.8-11.873 9.83v-5.12a.9.9 0 00-.904-.904c-6.296.008-10.637.383-15.259 7.09z" />
        </svg>
      );
    case "calendar":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={Props.className}
          width={Props.size}
          height={Props.size}
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M448 64h-21.332V21.332C426.668 9.559 417.109 0 405.332 0H384c-11.777 0-21.332 9.559-21.332 21.332V64H149.332V21.332C149.332 9.559 139.777 0 128 0h-21.332C94.891 0 85.332 9.559 85.332 21.332V64H64C28.715 64 0 92.715 0 128v320c0 35.285 28.715 64 64 64h384c35.285 0 64-28.715 64-64V128c0-35.285-28.715-64-64-64zm21.332 384c0 11.754-9.578 21.332-21.332 21.332H64c-11.754 0-21.332-9.578-21.332-21.332V214.187h426.664zm0 0" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={Props.className}
          width={Props.size}
          height={Props.size}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={Props.className}
          width={Props.size}
          height={Props.size}
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={Props.className}
          width={Props.size}
          height={Props.size}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
        </svg>
      );

    case "link":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 511.997 511.997"
          version="1.1"
          viewBox="0 0 511.997 511.997"
          xmlSpace="preserve"
          className={Props.className}
          width={Props.size}
          height={Props.size}
          fill="currentColor"
        >
          <path
            d="M211.26 389.24l-60.331 60.331c-25.012 25.012-65.517 25.012-90.508.005-24.996-24.996-24.996-65.505-.005-90.496l120.683-120.683c24.991-24.992 65.5-24.992 90.491 0 8.331 8.331 21.839 8.331 30.17 0 8.331-8.331 8.331-21.839 0-30.17-41.654-41.654-109.177-41.654-150.831 0L30.247 328.909c-41.654 41.654-41.654 109.177 0 150.831 41.649 41.676 109.177 41.676 150.853 0l60.331-60.331c8.331-8.331 8.331-21.839 0-30.17s-21.84-8.33-30.171.001z"
            transform="translate(1 1)"
          />
          <path
            d="M479.751 30.24c-41.654-41.654-109.199-41.654-150.853 0l-72.384 72.384c-8.331 8.331-8.331 21.839 0 30.17 8.331 8.331 21.839 8.331 30.17 0l72.384-72.384c24.991-24.992 65.521-24.992 90.513 0 24.991 24.991 24.991 65.5 0 90.491L316.845 283.638c-24.992 24.992-65.5 24.992-90.491 0-8.331-8.331-21.839-8.331-30.17 0s-8.331 21.839 0 30.17c41.654 41.654 109.177 41.654 150.831 0l132.736-132.736c41.654-41.654 41.654-109.178 0-150.832z"
            transform="translate(1 1)"
          />
        </svg>
      );

    case "views":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={Props.className}
          width={Props.size}
          height={Props.size}
          // fill="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      );
    default:
      return <div />;
  }
}
