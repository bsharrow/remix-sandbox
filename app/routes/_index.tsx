import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [ { title: "Remix Notes" } ];

export default function Index() {
  return (
    <main>
      <div className="flex flex-col gap-8">
        <div className="relative shadow-xl rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
              alt="Sonic Youth On Stage"
            />
            <div className="absolute inset-0 bg-lime-900 mix-blend-multiply" />
          </div>
          <div className="relative p-4">
            <h1 className="pb-2 text-center text-6xl font-extrabold tracking-tighter">
              <span className="block uppercase text-lime-600 drop-shadow-md">
                Hi how are you
              </span>
            </h1>
            <div className="pt-4">
              <button className="rounded-md shadow-lg bg-lime-400 px-2 py-1">
                <Link
                  to="/posts"
                  className="text-lg text-stone-900 tracking-tight"
                >
                  Blog Posts
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="relative shadow-xl rounded-lg overflow-hidden min-h-max">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg"
              alt="Sonic Youth On Stage"
            />
            <div className="absolute inset-0 bg-stone-900 mix-blend-multiply" />
          </div>
          <div className="relative p-4 mb-12">
            <h1 className="font-semibold text-3xl">
              <span className="block text-neutral-100">Hello</span>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
