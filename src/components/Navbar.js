import { Navbar, Dropdown, Button } from 'flowbite-react';
import { useAuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';

export default function NavbarComponent() {
  const { user } = useAuthContext();
  const router = useRouter();
  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleSignUp = () => {
    router.push('/auth/register');
  };

  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Eventify
          </span>
        </Navbar.Brand>
        {user ? (
          <>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={true}
                inline
                label={
                  <span className="block text-sm font-medium">
                    Hello, {user.nama_depan}!
                  </span>
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">
                    {user.nama_depan} {user.nama_belakang}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                <Dropdown.Item href="/auth/logout">Log out</Dropdown.Item>
              </Dropdown>
            </div>
            <Navbar.Collapse>
              <Navbar.Link href="/" active={isActive('/')}>
                Home
              </Navbar.Link>
              <Navbar.Link href="/event/projects" active={isActive('/event/projects')}>
                Projects
              </Navbar.Link>
              <Navbar.Link href="/event/areas" active={isActive('/event/areas')}>
                Areas
              </Navbar.Link>
              <Navbar.Link href="/event/resources" active={isActive('/event/resources')}>
                Resources
              </Navbar.Link>
              <Navbar.Link href="/archive/archived" active={isActive('/archive/archived')}>
                Archives
              </Navbar.Link>
              <Navbar.Link href="/about" active={isActive('/about')}>
                About Us
              </Navbar.Link>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <div className="flex gap-2 md:order-2">
              <Button color="light" onClick={handleLogin}>
                Login
              </Button>
              <Button onClick={handleSignUp}>Sign Up</Button>
            </div>
            <Navbar.Collapse>
              <Navbar.Link href="/" active={isActive('/')}>
                Home
              </Navbar.Link>
              <Navbar.Link href="/about" active={isActive('/about')}>
                About Us
              </Navbar.Link>
            </Navbar.Collapse>
          </>
        )}
      </Navbar>
    </>
  );
}
