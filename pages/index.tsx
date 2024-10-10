import { notFound } from 'next/navigation';
import { generateOpenApi } from '@ts-rest/open-api';
import { testContract } from '@component/test.contract';
import dynamic from 'next/dynamic';

// Dynamically import the client component to ensure it's only used on the client side
const Root = dynamic(() => import('./root.page'), { ssr: false });

const sharedConfig = {
  info: {
    title: 'test docs',
    description: `some description`,
    version: '0.1',
  }
};

const openApiDocument = generateOpenApi(testContract, {
  ...sharedConfig,
});

function Page() {
  if (!openApiDocument) {
    notFound();
  }

  return <Root spec={openApiDocument} />;
}

export default Page;