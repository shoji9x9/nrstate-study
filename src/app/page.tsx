import { AddButton } from "@/components/client/AddButton";
import { Display } from "@/components/client/Display";
import { ResetButton } from "@/components/client/ResetButton";
import { SideMenu } from "@/components/server/Sidemenu";
import { Counter, initialCounter, path } from "@/store/Counter";
import { currentPageState } from "nrstate";
import PageStateProvider from "nrstate-client/PageStateProvider";

export default function Home() {
  const count = 0;
  return (
    <PageStateProvider
      current={currentPageState<Counter>(initialCounter, path)}
    >
      <main className="p-24">
        <h2 className="text-xl">Server Component Page</h2>

        <div className="flex mt-10">
          <div>
            <SideMenu />
          </div>
          <div className="ml-10"></div> {/* Spacer */}
          <div>
            <AddButton />
            <div className="mt-10"></div> {/* Spacer */}
            <ResetButton />
            <div className="mt-10"></div> {/* Spacer */}
            <Display />
          </div>
        </div>
      </main>
    </PageStateProvider>
  );
}
