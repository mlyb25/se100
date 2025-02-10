const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<WelcomeMessagesSection/>);

function WelcomeMessagesTitle (){
        return <p> Welcome Messages</p>
}

function WelcomeMessagesLists (){
        return <>
        <ul>
                <li>Welcome Tom from Singapore</li>
                <li>Welcome Jerry from Malaysia</li>
                <li>Welcome Sarah from Indonesia</li>
        </ul>
        </>
}

function WelcomeMessagesSection (){
        return <>
        <WelcomeMessagesTitle/>
        <WelcomeMessagesLists/>
        </>
}
