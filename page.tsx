import CustomerForm from './components/CustomerForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Roof Leak Report</h1>
      <CustomerForm />
    </main>
  )
}

