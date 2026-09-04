import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="wrap hero-inner">
          <div className="hero-kicker">
            <span className="pip"></span>
            <span className="divider"></span>
            <span>ORG&nbsp;285034265</span>
            <span className="divider"></span>
            <span>SOLO / OPEN&#8209;SOURCE</span>
          </div>

          <h1 className="hero-title">
            RE&#8203;A4V&#8202;LAB
            <span className="sub">— an independent build bench</span>
          </h1>

          <p className="hero-lede">
            A one-person software lab run by <strong>EmanuelPlays</strong>. We spend our nights on
            <strong>Fabric mods</strong>, <strong>Forge Mods</strong>, and <strong>
            Spigot & Paper Plugins</strong> — shipped & documented.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="https://github.com/REA4V-Lab" target="_blank" rel="noopener">
              Open the GitHub org
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6"/></svg>
            </a>
            <a className="btn btn-ghost" href="#work">
              Read the build log
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 8h10M8 3l5 5-5 5"/></svg>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="manifesto">
          <div className="wrap">
            <div className="manifesto-grid">
              <div className="reveal">
                <p className="pull-quote">
                  <span className="mk">01/</span> Small tools, sharp edges. Nothing gets shipped until it
                  survives the edge case we were tempted to skip.
                </p>
              </div>

              <div className="reveal">
                <div className="manifesto-copy">
                  <p>
                    REA4V-Lab is the workshop behind <strong>EmanuelPlays</strong>' independent projects —
                    Minecraft mods built on Fabric, Forge, and Spigot & Paper Plugins.
                  </p>
                  <p>
                    Everything here is built solo, with a bias toward <strong>modular, multi-file
                    architecture</strong> over clever one-file scripts — and a habit of keeping repos
                    actually public, documented, and open to pull requests instead of dumping code and
                    walking away.
                  </p>
                </div>

                <div className="principles">
                  <div className="principle">
                    <span className="num mono">01</span>
                    <div>
                      <h4>Modular by default</h4>
                      <p>Every mod, plugin, and site is split into clear, ownable pieces — never a single tangled file pretending to be an architecture.</p>
                    </div>
                  </div>
                  <div className="principle">
                    <span className="num mono">02</span>
                    <div>
                      <h4>Open to contribution</h4>
                      <p>Repos stay genuinely public — issues, forks, and pull requests welcome, not just a mirror for show.</p>
                    </div>
                  </div>
                  <div className="principle">
                    <span className="num mono">03</span>
                    <div>
                      <h4>Documentation first</h4>
                      <p>Every ship gets a changelog, a readme, and inline comments — no mystery meat, no hidden traps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Build Log</div>
                <h2 className="section-title">Public repositories, <em>on record</em>.</h2>
              </div>
              <p className="section-note">Every entry below links to a real, public REA4V-Lab repository — no placeholder work.</p>
            </div>

            <div className="specimen">
              <div className="specimen-meta">
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <img src="https://cdn.modrinth.com/data/iUkzQgoX/d7bb37032d83bca73474c320954ce3c2d7b48333_96.webp" alt="SpigBan" style={{width: '48px', height: '48px', borderRadius: '6px'}}/>
                  <div className="specimen-tag">SPEC&#8209;01 · FEATURED</div>
                </div>
                <div className="status"><span className="pip"></span> v1.0.0 released</div>
                <div className="meta-row">
                  <span className="k">Platform</span>
                  <span className="v">Spigot / Paper 1.21.x</span>
                </div>
                <div className="meta-row">
                  <span className="k">Language</span>
                  <span className="v">Java</span>
                </div>
                <div className="meta-row">
                  <span className="k">Storage</span>
                  <span className="v">SQLite · MySQL</span>
                </div>
                <div className="meta-row">
                  <span className="k">Case format</span>
                  <span className="v">SPGB&#8209;XXXXXX</span>
                </div>
              </div>
              <div className="specimen-body">
                <h3>SpigBan <span>— punishment management, done properly</span></h3>
                <p>
                  An advanced, all-in-one punishment plugin for Spigot and Paper. Bans, temp-bans,
                  IP-bans, mutes, warns, and a full case-history system with sequential case IDs —
                  the kind of moderation backbone most servers end up stitching together from three
                  different plugins.
                </p>
                <div className="feature-tags">
                  <span>Ban / Temp-ban / IP-ban</span>
                  <span>Mute / Temp-mute</span>
                  <span>Warn & case viewer</span>
                  <span>LuckPerms integration</span>
                  <span>Configurable screens</span>
                </div>
                <div className="specimen-links">
                  <a href="https://github.com/REA4V-Lab/SpigBan" target="_blank" rel="noopener">
                    Source on GitHub
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6"/></svg>
                  </a>
                  <a href="https://modrinth.com/plugin/SpigBan" target="_blank" rel="noopener">
                    Modrinth listing
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="log-grid">
              <div className="log-card">
                <div className="log-card-top">
                  <span className="tag mono">SPEC&#8209;02 · CONTRIBUTION</span>
                  <a href="https://modrinth.com/resourcepack/metallified-rails" target="_blank" rel="noopener" aria-label="Open Metallified Rails on Modrinth">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6"/></svg>
                  </a>
                </div>
                <h4>Metallified Rails</h4>
                <p>This resourcepack modifies rails so they are metal instead of the default ugly rails.</p>
                <div className="stack mono">On Modrinth · <b>Custom license / Terms of use</b></div>
              </div>

              <div className="log-card">
                <div className="log-card-top">
                  <span className="tag mono">SPEC&#8209;03 · CONTRIBUTION</span>
                  <a href="https://github.com/Ryntra-App/Ryntra" target="_blank" rel="noopener" aria-label="Open Ryntra on GitHub">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6"/></svg>
                  </a>
                </div>
                <h4>Ryntra</h4>
                <p>A mobile companion app for Modrinth developers — mirrored and maintained here for contributions back to the upstream project.</p>
                <div className="stack mono">TypeScript · <b>GPL-3.0 · 8 forks</b></div>
              </div>
            </div>
          </div>
        </section>

        <section id="focus">
          <div className="wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">Focus Areas</div>
                <h2 className="section-title">Three disciplines, <em>one bench</em>.</h2>
              </div>
              <p className="section-note">The recurring shapes of work coming out of the lab, whether or not each build has shipped publicly yet.</p>
            </div>

            <div className="focus-grid">
              <div className="focus-tile">
                <span className="idx">01</span>
                <svg className="focus-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4">
                  <path d="M24 5 42 15v18L24 43 6 33V15Z"/>
                  <path d="M6 15 24 25l18-10M24 25v18"/>
                </svg>
                <h4>Fabric Modding</h4>
                <p>Client and server-side mods built on Fabric — HUD overlays, custom mechanics, and config-driven features that survive version bumps instead of breaking on them.</p>
              </div>

              <div className="focus-tile">
                <span className="idx">02</span>
                <svg className="focus-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4">
                  <path d="M8 10h32v20H20l-8 8V30H8Z"/>
                  <circle cx="17" cy="20" r="1.6" fill="currentColor" stroke="none"/>
                  <circle cx="24" cy="20" r="1.6" fill="currentColor" stroke="none"/>
                  <circle cx="31" cy="20" r="1.6" fill="currentColor" stroke="none"/>
                </svg>
                <h4>Spigot & Paper Plugins</h4>
                <p>Full moderation, ticketing, applications, and economy stacks — designed to be ported between frameworks and languages without losing their data model.</p>
              </div>

              <div className="focus-tile">
                <span className="idx">03</span>
                <svg className="focus-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4">
                  <circle cx="24" cy="24" r="5"/>
                  <circle cx="8" cy="10" r="3.4"/>
                  <circle cx="40" cy="10" r="3.4"/>
                  <circle cx="8" cy="38" r="3.4"/>
                  <circle cx="40" cy="38" r="3.4"/>
                  <path d="m19.6 20.4-8-7.4M28.4 20.4l8-7.4M19.6 27.6l-8 7.4M28.4 27.6l8 7.4"/>
                </svg>
                <h4>Forge Modding</h4>
                <p>Client and server-side mods built on Forge — HUD overlays, custom mechanics, and config-driven features that survive version bumps instead of breaking on them.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-panel">
              <div className="eyebrow">Get in touch</div>
              <h2 className="contact-title">Follow the lab<br/><em>on GitHub.</em></h2>
              <div className="contact-actions">
                <a className="btn btn-solid" href="https://github.com/REA4V-Lab" target="_blank" rel="noopener">
                  <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.6 2.29 6.65 5.47 7.73.4.08.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.91-3.64-4.02 0-.89.31-1.61.82-2.18-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.83a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.83 2.2-.83.44 1.12.16 1.95.08 2.15.51.57.82 1.28.82 2.18 0 3.12-1.87 3.81-3.65 4.02.29.25.54.75.54 1.51 0 1.09-.01 1.97-.01 2.24 0 .21.15.48.55.39A8.14 8.14 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z"/></svg>
                  github.com/REA4V-Lab
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6"/></svg>
                </a>
                <a className="btn btn-ghost" href="https://github.com/EmanuelPlays" target="_blank" rel="noopener">
                  <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.64 0 8.13c0 3.6 2.29 6.65 5.47 7.73.4.08.55-.18.55-.39 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.5-2.69-.96-.09-.23-.48-.96-.82-1.15-.28-.15-.68-.53-.01-.54.63-.01 1.08.59 1.23.83.72 1.23 1.87.88 2.33.67.07-.53.28-.88.51-1.08-1.78-.2-3.64-.91-3.64-4.02 0-.89.31-1.61.82-2.18-.08-.2-.36-1.03.08-2.15 0 0 .67-.22 2.2.83a7.4 7.4 0 0 1 4 0c1.53-1.06 2.2-.83 2.2-.83.44 1.12.16 1.95.08 2.15.51.57.82 1.28.82 2.18 0 3.12-1.87 3.81-3.65 4.02.29.25.54.75.54 1.51 0 1.09-.01 1.97-.01 2.24 0 .21.15.48.55.39A8.14 8.14 0 0 0 16 8.13C16 3.64 12.42 0 8 0Z"/></svg>
                  @EmanuelPlays
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12 12 4M6 4h6v6"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-row">
          <span>&copy; <span id="year"></span> REA4V&#8209;Lab</span>
          <span className="footer-clock"><span className="pip" style={{animation: 'none'}}></span> uptime <span id="clock">00:00:00</span></span>
          <a href="#top" className="back-top">
            Back to top
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 12V4M4 8l4-4 4 4"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;