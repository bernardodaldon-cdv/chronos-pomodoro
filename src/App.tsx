import './styles/theme.css'
import './styles/global.css'

export function App() {
    console.log('Oi');
  
    return (
        <>
            <h1>Hello World! (do APP)</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur hic sed nesciunt, numquam a iure quas ratione eius est fuga, ex exercitationem officia necessitatibus aliquid harum omnis, qui sint.
            </p>
        </>
    );
    //Sempre precisa de div contornando tudo, só manda um pai, pode ser só
    //um <> e </> (fragment)
}

//export default App;  
//export { App };