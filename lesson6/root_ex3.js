// root.js

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)

function WelcomeMessagesTitle (){
        return <p> Welcome Messages</p>
      }

function WelcomeMessage(props) {
        return <li>Welcome {props.name} from {props.country}</li>
      }
      
function WelcomeMessagesList() {
        return <ul>
                <WelcomeMessage name="Tom" country="Singapore"/>
                <WelcomeMessage name="Jerry" country="Malaysia"/>
                <WelcomeMessage name="Sarah" country="Indonesia"/>
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
      
     

