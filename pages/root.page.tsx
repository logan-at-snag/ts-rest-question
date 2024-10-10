"use client";
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Root = ({ spec }: { spec: Record<string, any> }) => {
  return (
    <div
      id="api-doc"
      className="absolute bottom-0 left-0 right-0 top-0 min-h-[100vh] overflow-auto !bg-white"
    >
      <SwaggerUI
        spec={spec}
        docExpansion="list"
        tryItOutEnabled={true}
        displayRequestDuration={true}
      />
    </div>
  );
};

export default Root;