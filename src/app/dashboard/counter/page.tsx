import { CartCounter } from "@/components";

export const metadata = {
  title: 'Cart products page',
  description: 'Cart products page generated',
}
export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span>Cart products</span>

      <CartCounter />
    </div>
  );
}