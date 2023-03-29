import type { ReactNode } from 'react';


type MainProps = {
  children: ReactNode;
};

const Main = (props: MainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
      <main className="content py-5 text-xl">{props.children}</main>
  </div>
);

export { Main };
