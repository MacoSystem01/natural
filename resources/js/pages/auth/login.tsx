import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm({ canResetPassword }: { canResetPassword?: boolean }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
            <div className="bg-white border border-gray-200 shadow-lg rounded-xl w-full max-w-md text-center overflow-hidden animate-fadeInDown">
                <div className="p-6">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="mx-auto w-60 mb-4"
                    />
                    <h1 className="text-2xl font-semibold text-black"></h1>
                </div>

                <form onSubmit={submit} className="flex flex-col gap-6 px-8 pb-6 text-left">
                    <div className="grid gap-2 animate-fadeIn">
                        <Label htmlFor="email">Usuario</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="usuario@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2 animate-fadeIn delay-200">
                        <div className="flex items-center">
                            <Label htmlFor="password">Contraseña</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Contraseña"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <Button
                        type="submit"
                        className="w-full mt-4 bg-blue-500 text-white hover:bg-blue-600 animate-fadeIn delay-300"
                        disabled={processing}
                    >
                        {processing && (
                            <LoaderCircle className="h-4 w-4 animate-spin mr-2 inline-block" />
                        )}
                        INGRESAR
                    </Button>
                </form>

                <div className="bg-gray-100 border-t border-gray-200 py-4 text-sm text-gray-00 animate-fadeIn delay-500">
                    <a
                        className="underlineHover hover:text-black transition-all duration-200"
                    >
                        MACO System
                    </a>
                </div>
            </div>
        </div>
    );
}

