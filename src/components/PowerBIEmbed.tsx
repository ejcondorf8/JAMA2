import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const PowerBIReport: React.FC = () => {
  const reportId = '<YOUR_REPORT_ID>';
  const embedUrl = '<YOUR_EMBED_URL>';
  const accessToken = '<YOUR_ACCESS_TOKEN>';

  if (reportId === '<YOUR_REPORT_ID>' || embedUrl === '<YOUR_EMBED_URL>' || accessToken === '<YOUR_ACCESS_TOKEN>') {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">
          PowerBI report configuration is not set. Please provide valid PowerBI credentials.
        </p>
      </div>
    );
  }

  return (
    <PowerBIEmbed
      embedConfig={{
        type: 'report',
        id: reportId,
        embedUrl: embedUrl,
        accessToken: accessToken,
        tokenType: models.TokenType.Embed,
        settings: {
          panes: {
            filters: {
              expanded: false,
              visible: false
            }
          },
          background: models.BackgroundType.Transparent,
        }
      }}
      cssClassName="h-full w-full"
    />
  );
};

export default PowerBIReport;