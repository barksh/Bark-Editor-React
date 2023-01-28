/**
 * @author WMXPY
 * @namespace Components_Editor
 * @description Editor
 */

import React from "react";
import styled, { StyledComponent } from "styled-components";
import { PropsChildrenAddOn, PropsClassNameAddOn } from "../../util/props";

const StyledButton: StyledComponent<"button", any> = styled.button`
    background-color: red;
`;

export type EditorProps =
    & {
    }
    & PropsChildrenAddOn
    & PropsClassNameAddOn;

export const BarkEditor: React.FC<EditorProps> = (props: EditorProps) => {

    return (<StyledButton>
        {props.children}
    </StyledButton>);
};
