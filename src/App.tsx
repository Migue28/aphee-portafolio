import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import { Paperclip } from "react-feather";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex flex-col min-h-[100dvh]">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <NavLink to="/" className="flex items-center justify-center">
              <Paperclip className="h-6 w-6" />
              <span className="sr-only">Jane Doe's Portfolio</span>
            </NavLink>
            <nav className="ml-auto flex gap-4 sm:gap-6">
              <NavLink
                to="/"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Work
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                About
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                Contact
              </NavLink>
            </nav>
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6 space-y-6 lg:space-y-10">
                <div className="grid gap-4 lg:grid-cols-2 lg:gap-10">
                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                      Jane Doe
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Crafting beautiful and functional digital experiences.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <NavLink
                        to="/"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        View Work
                      </NavLink>
                      <NavLink
                        to="/"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Contact Me
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="400"
                      alt="Hero"
                      className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Featured Work
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Explore a selection of my best design projects.
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                  <NavLink
                    to="/"
                    className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                    <div className="mt-4 space-y-1">
                      <h3 className="text-lg font-bold">Project Title</h3>
                      <p className="text-muted-foreground">
                        A brief description of the project.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/"
                    className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                    <div className="mt-4 space-y-1">
                      <h3 className="text-lg font-bold">Project Title</h3>
                      <p className="text-muted-foreground">
                        A brief description of the project.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink
                    to="/"
                    className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    <img
                      src="/placeholder.svg"
                      width="550"
                      height="310"
                      alt="Project"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    />
                    <div className="mt-4 space-y-1">
                      <h3 className="text-lg font-bold">Project Title</h3>
                      <p className="text-muted-foreground">
                        A brief description of the project.
                      </p>
                    </div>
                  </NavLink>
                </div>
              </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                      About Me
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Passionate about design and technology.
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      I'm a designer with a strong background in user experience
                      and visual design. I love creating intuitive and visually
                      appealing digital products that solve real problems.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <form className="flex flex-col gap-4">
                      <Input
                        type="text"
                        placeholder="Name"
                        className="max-w-lg flex-1"
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        className="max-w-lg flex-1"
                      />
                      <Textarea
                        placeholder="Message"
                        className="max-w-lg flex-1"
                      />
                      <Button type="submit">Send Message</Button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">
              &copy; 2024 Jane Doe. All rights reserved.
            </p>
          </footer>
        </div>
      ),
    },
  ]);
  // const navigate = useNavigate();
  return <RouterProvider router={router} />;
}

export default App;
