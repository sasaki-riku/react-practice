import { createRoot } from 'react-dom/client';
import { AppEP4 } from "./AppEP4";
import { AppEP5 } from "./AppEP5";
import { AppEP6 } from "./AppEP6";
import { AppEP7 } from "./AppEP7";
import { AdminFlagProvider } from './components/Providers/AdminFlagProvider';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <AdminFlagProvider>
        <AppEP7 />
    </AdminFlagProvider>,
);