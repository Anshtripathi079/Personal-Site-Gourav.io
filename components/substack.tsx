import { useDevice } from '../hooks/useDevice';

export function SubstackForm() {
    const device = useDevice();
    const width = device === 'mobile' ? '350' : '480';
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="relative flex w-fit flex-col items-center justify-center rounded-2xl border-2 border-orange-400 px-5 py-2 text-center">
                <div className="mt-4 text-xl font-bold">Gourav's Newsletter</div>
                <div className="mb-1 mt-3 text-base text-slate-500">
                    I write about startups, tech, productivity, personal development, and more.
                </div>
                <iframe
                    id="substack-embed"
                    src="https://gorvgoyl.substack.com/embed"
                    width={width}
                    height="150"
                    loading="lazy"
                    title="Substack Embed"
                    className="relative"
                    frameBorder="0"
                    scrolling="no"
                />
                {/* <div className="pointer-events-none absolute bottom-[40px] z-50 h-[45px] w-[450px] select-none bg-white pt-3 text-center text-xs text-slate-400">
                    No Spam, Ever.
                </div> */}
            </div>
        </div>
    );
}
