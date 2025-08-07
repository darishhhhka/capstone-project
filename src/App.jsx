import "./App.css";
import data from "./assets/data/card.json";
import { Card } from "./Card";
import "./index.css";

function App() {
  return (
    <main className="container-2xl mx-auto">
      <section className="py-[80px] px-[30px] bg-[var(--dark-grey)] w-screen h-fit grid grid-cols-[repeat(auto-fit,minmax(300px,var(--card-max-width)))] justify-center items-center gap-[var(--mini-gap)] rounded-[var(--border-radius-section)] md:gap-[var(--mini-gap)] lg:self-center">
        {data.map((item, index) => (
          <Card
            key={index}
            iconName={item.iconName}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
// пампепрс 10шт, одноразовые салфетки, футболки., очки.,
// помидор, яйцо, картошка, сахар., баночку варенья. (вишневое, клубничное, малиновое)
