import { Thought } from "@/types";
import React, { PropsWithChildren } from "react";

const Test = ({ thought }: PropsWithChildren<{ thought: Thought }>) => {
    return <div className="text-white p-6">{thought.message}</div>;
};

export default Test;
