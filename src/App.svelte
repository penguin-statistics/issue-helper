<main>
  <img
    src="https://penguin.upyun.galvincdn.com/logos/penguin_stats_logo.png"
    alt="Penguin Statistics"
  />
  <h1>Deprecated</h1>

  <p>
    The Issue Helper has been deprecated in favor of GitHub Issue Templates (<a
      href="https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates"
      rel="noreferrer noopener">learn more</a
    >).
  </p>

  <p>
    Please utilize the <strong>Issues</strong> panel for the corresponding penguin-statistics
    repository to file a new issue.
  </p>

  <footer>
    Penguin Statistics | {new Date().getFullYear()}
  </footer>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    background: #f0f0f0;
  }

  main {
    text-align: center;
    padding: 5vh 5vw;
    margin: -2rem auto 0 auto;
  }

  img {
    height: 6rem;
  }

  h1 {
    color: #5618dd;
    font-size: 4rem;
    font-weight: 200;
    line-height: 1.1;
    letter-spacing: -2px;
    margin: 1rem 0 2rem;
  }

  p {
    margin: 1rem auto;
    line-height: 1.8;
  }

  a:focus {
    outline: 1px solid;
  }

  footer {
    font-size: 0.8rem;
    margin-top: 4rem;
    opacity: 0.7;
  }

  /* dark */
  @media (prefers-color-scheme: dark) {
    h1 {
      color: #8c61e7;
    }
    :root {
      background-color: #1e1e1e;
      color: #fff;
    }
    a {
      color: #8c61e7;
    }
  }
</style>
