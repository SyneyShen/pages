import { HelpPanel } from '@cloudscape-design/components';
import AppLayout, {
  AppLayoutProps,
} from '@cloudscape-design/components/app-layout';
import ContentLayout from '@cloudscape-design/components/content-layout';
import Grid from '@cloudscape-design/components/grid';
import Header from '@cloudscape-design/components/header';
import { SetStateAction, useRef, useState } from 'react';
import React = require('react');
import ApplicationPortal from './application-portal';

const Main = function () {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [toolsContent, setToolsContent] = useState(<HelpPanel />);
  const appLayout = useRef<AppLayoutProps.Ref>(null);

  const loadHelpPanelContent = (toolsContent: SetStateAction<JSX.Element>) => {
    setToolsOpen(true);
    setToolsContent(toolsContent);
    appLayout.current?.focusToolsClose();
  };

  return (
    <AppLayout
      ref={appLayout}
      content={
        <ContentLayout
          header={
            <Header
              variant="h1"
              description="本系统提供如下应用，请选择并点击进入。"
            >
              Data Expert Applications
            </Header>
          }
        >
          <Grid
            gridDefinition={[
              { colspan: { l: 4, m: 4, default: 12 } },
              { colspan: { l: 4, m: 4, default: 12 } },
              { colspan: { l: 4, m: 4, default: 12 } },
            ]}
          >
            <ApplicationPortal
              name="Market"
              description="Market Description"
              information="Market Information"
              url="/main/market"
              loadHelpPanel={loadHelpPanelContent}
            />
            <ApplicationPortal
              name="Trend"
              description="Trend Description"
              information="Trend Information"
              url="/main/trend"
              loadHelpPanel={loadHelpPanelContent}
            />
            <ApplicationPortal
              name="Commodity"
              description="Commodity Description"
              information="Commodity Information"
              url="/main/commodity"
              loadHelpPanel={loadHelpPanelContent}
            />
          </Grid>
        </ContentLayout>
      }
      headerSelector="#header"
      navigationHide={true}
      toolsHide={!toolsOpen}
      tools={toolsContent}
      toolsOpen={toolsOpen}
      onToolsChange={({ detail }) => setToolsOpen(detail.open)}
    />
  );
};

export default Main;
