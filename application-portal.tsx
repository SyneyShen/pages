import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import ColumnLayout from "@cloudscape-design/components/column-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import HelpPanel from "@cloudscape-design/components/help-panel";
import Icon from "@cloudscape-design/components/icon";
import { SetStateAction } from "react";
import React=require("react");
import { useNavigate } from "react-router-dom";

function applicationInfo(name: string, information: string) {
    return (
        <HelpPanel
            header={<h2>{name}</h2>}
        >
            <p>{information}</p>
        </HelpPanel>
    );
}

export interface ApplicationPortalProps {
    name: string,
    description?: string,
    information: string,
    url: string,
    loadHelpPanel: (toolsContent: SetStateAction<JSX.Element>) => void
}

export default function ApplicationPortal({ name, description, information, url, loadHelpPanel }: ApplicationPortalProps) {
    const navigate = useNavigate()

    return (
        <Container
            header={
                <Header
                    variant="h2"
                    actions={
                        <Button onClick={() => navigate(url)}>进入</Button>
                    }
                >
                    {name}
                </Header>
            }
        >
            <ColumnLayout>
                <div>
                    <Box variant="awsui-key-label">Description</Box>
                    <div>{description}</div>
                </div>

            </ColumnLayout>
        </Container>
    );
}