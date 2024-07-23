import ProductDesktop from "./assets/image-product-desktop.jpg";
import ProductMobile from "./assets/image-product-mobile.jpg";
import cart from "./assets/icon-cart.svg";
function App() {
  return (
    <main className="flex min-h-screen w-screen items-center justify-center bg-cream px-6 py-8 font-Montserrat text-regular text-Dark-grayish-blue">
      <div className="grid w-fit max-w-sm overflow-hidden rounded-xl bg-white sm:max-w-xl sm:auto-rows-max sm:grid-cols-2">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={ProductMobile} />
            <img
              src={ProductDesktop}
              alt="Perfume bottle on top of table surrounding with leafes"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="p-7">
          <p className="mb-5 uppercase tracking-[0.5em]">Perfume</p>
          <h1 className="mb-7 font-Fraunces font-bold text-very-dark-blue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the Hous of CHANEL.
          </p>
          <div className="flex items-center gap-5">
            <span className="text-3xl font-Fraunces font-bold text-dark-cyan">
              $149.99
            </span>
            <span className="line-through">$169.99</span>
          </div>
          <button className="flex w-full justify-center gap-4 rounded-lg bg-dark-cyan p-4 text-white">
            <img src={cart} alt="Cart icon" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}
export default App;
