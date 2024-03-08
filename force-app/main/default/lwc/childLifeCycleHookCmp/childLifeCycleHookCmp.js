import { LightningElement } from 'lwc';

export default class ChildLifeCycleHookCmp extends LightningElement 
{
    constructor()
    {
        super();
        console.log("Hello We are now in child LWC Cmp Constructor !!!");
    }

    connectedCallback()
    {
        console.log("Hello There, We are now in connected callback method of Child LWC Cmp!!!");
    }

    renderedCallback()
    {
        console.log("Hello There, We are now in renderedCallback method of Child LWC Cmp!!!");
    }
    disconnectedCallback()
    {
        console.log("Hello there, We are now in disconnected Callback method of child LWC Cmp!!!");
    }
    errorCallback()
    {
        console.log("We are now in error Callback method of Child Component!!!");
    }
}