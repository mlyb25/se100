// root.js

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)

function WelcomeMessagesTitle (){
        return <p> Welcome Messages</p>
      }


      const users = [
        { name: 'Tom', country: 'Singapore' },
        { name: 'Jerry', country: 'Malaysia' },
        { name: 'Sarah', country: 'Indonesia' }
    ];
  
      
function WelcomeMessagesList() {
        return <ul>
               {users.map(user => (<li>Welcome {user.name} from {user.country}</li>))}
        </ul>
      }
      
function WelcomeMessagesSection() {
        return <>
            <WelcomeMessagesTitle/>
            <WelcomeMessagesList />
          </>
      }
      
function App() {
        return <>
          <WelcomeMessagesSection />
        </>
      }
      
     

