import Grid from './Grid'
import { GridProvider } from './GridProvider'


export default function App() {
  return (
    <GridProvider>
      <Grid />
    </GridProvider>
  );
}