import { Instagram, Linkedin } from 'react-feather';

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-24 border-t border-secondary">
      <div className="flex space-x-4 ">
        <p className="text-sm text-muted-foreground">
          Made with ❤️ by{' '}
          <a
            className="underline"
            href="https://github.com/KassiaMabily"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kassia Fraga
          </a>
        </p>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/kassia-fraga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/kassia.mabily/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-8">
        <p>
          Icons made by{' '}
          <a
            className="underline"
            href="https://www.flaticon.com/authors/meaicon"
            title="meaicon"
          >
            meaicon
          </a>{' '}
          from{' '}
          <a
            className="underline"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </p>
      </div>
    </footer>
  );
}
