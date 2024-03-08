import { LightningElement } from 'lwc';

export default class LifeCycleHookLWC extends LightningElement 
{
    isVisible = true;
    constructor()
    {
        super();
        console.log("Hello We are in Constructor method now!!!");
    }

    connectedCallback()
    {
        console.log("We are now in ConnectedCallBack Method!!!");
    }

    renderedCallback()
    {
        console.log("We are now in renderedCallBack Method!!!");
    }

    handleClick()
    {
        if(this.isVisible == true)
        {
            this.isVisible = false;
        }
        else
        {
            this.isVisible = true;
        }
    }

    
}