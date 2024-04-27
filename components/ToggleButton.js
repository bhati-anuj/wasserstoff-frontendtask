import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ToggleButton = () => {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Events</TabsTrigger>
          <TabsTrigger value="password">Collections</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          {/* Make changes to your account here. */}
        </TabsContent>
        <TabsContent value="password">
            {/* Change your password here. */}
            </TabsContent>
      </Tabs>
    </>
  );
};

export default ToggleButton;
