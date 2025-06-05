import { Button } from '@/components/ui/button';
import { MyButton } from '@/components/ui/my-button';

export default function Welcome() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
            <h1 className="mb-4 text-4xl font-bold">Welcome to Our Application!</h1>
            <p className="mb-8 text-lg">We are glad to have you here.</p>
            <div className="flex gap-4 items-start">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <MyButton size="sm" look="secondary">Small Button</MyButton>
                <MyButton size="default" look="destructive">Default Button</MyButton>
                <MyButton size="lg" look="primary">Large Button</MyButton>
            </div>
        </div>
    );
}
