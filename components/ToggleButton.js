import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventPage from "./EventPage";
import CollectionsPage from "./CollectionsPage";

const ToggleButton = () => {
  return (
    <>
      <Tabs defaultValue="events" className="w-[400px]">
        <TabsContent value="events" className="w-screen" >
         <EventPage/>
        </TabsContent>
        <TabsContent value="collections" className="w-screen">
          <CollectionsPage/>
        </TabsContent>
        <TabsList>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="collections">Collections</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default ToggleButton;
