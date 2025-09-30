import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Production from "./pages/Production";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import PETStrapping from "./pages/products/PETStrapping";
import StretchFilm from "./pages/products/StretchFilm";
import CorrugatedBoxes from "./pages/products/CorrugatedBoxes";
import Staples from "./pages/products/Staples";
import Tools from "./pages/products/Tools";
import PETStrapping12mm from "./pages/products/PETStrapping12mm";
import PETStrapping15mm from "./pages/products/PETStrapping15mm";
import PETStrapping19mm from "./pages/products/PETStrapping19mm";
import StretchFilm17 from "./pages/products/StretchFilm17";
import StretchFilm20 from "./pages/products/StretchFilm20";
import StretchFilm23 from "./pages/products/StretchFilm23";
import CorrugatedBox300 from "./pages/products/CorrugatedBox300";
import CorrugatedBox400 from "./pages/products/CorrugatedBox400";
import CorrugatedBox600 from "./pages/products/CorrugatedBox600";
import Staples12mm from "./pages/products/Staples12mm";
import Staples15mm from "./pages/products/Staples15mm";
import Staples19mm from "./pages/products/Staples19mm";
import ToolTensioner from "./pages/products/ToolTensioner";
import ToolSealer from "./pages/products/ToolSealer";
import ToolPneumatic from "./pages/products/ToolPneumatic";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/pet-strapping" element={<PETStrapping />} />
          <Route path="/products/pet-strapping/12mm" element={<PETStrapping12mm />} />
          <Route path="/products/pet-strapping/15mm" element={<PETStrapping15mm />} />
          <Route path="/products/pet-strapping/19mm" element={<PETStrapping19mm />} />
          <Route path="/products/stretch-film" element={<StretchFilm />} />
          <Route path="/products/stretch-film/17" element={<StretchFilm17 />} />
          <Route path="/products/stretch-film/20" element={<StretchFilm20 />} />
          <Route path="/products/stretch-film/23" element={<StretchFilm23 />} />
          <Route path="/products/corrugated-boxes" element={<CorrugatedBoxes />} />
          <Route path="/products/corrugated-boxes/300x200x200" element={<CorrugatedBox300 />} />
          <Route path="/products/corrugated-boxes/400x300x300" element={<CorrugatedBox400 />} />
          <Route path="/products/corrugated-boxes/600x400x400" element={<CorrugatedBox600 />} />
          <Route path="/products/staples" element={<Staples />} />
          <Route path="/products/staples/12mm" element={<Staples12mm />} />
          <Route path="/products/staples/15mm" element={<Staples15mm />} />
          <Route path="/products/staples/19mm" element={<Staples19mm />} />
          <Route path="/products/tools" element={<Tools />} />
          <Route path="/products/tools/tensioner" element={<ToolTensioner />} />
          <Route path="/products/tools/sealer" element={<ToolSealer />} />
          <Route path="/products/tools/pneumatic" element={<ToolPneumatic />} />
          <Route path="/about" element={<About />} />
          <Route path="/production" element={<Production />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
