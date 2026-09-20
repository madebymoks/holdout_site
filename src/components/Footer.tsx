import logo from '../assets/studio_pics/1608_logo_white.png'

function Footer() {
  return (
    <footer className="border-t border-t-[rgba(242,237,227,0.1)] bg-ink py-10 text-bg">
      <div className="mx-auto flex max-w-[1360px] flex-col items-start gap-4 px-12 min-[720px]:flex-row min-[720px]:items-center min-[720px]:justify-between min-[720px]:gap-0">
        <div className="flex items-center gap-4">
          <img src={logo} alt="1608 Studios" className="h-8 w-auto" />
          <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-bg/55">
            &copy; 2026 <span className="text-highlight">1608 Studios</span>
          </p>
        </div>
        {/*
        <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-bg/55">
          Unique gaming experiences
        </p>
        */}
      </div>
    </footer>
  )
}

export default Footer
