import { screen, render } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

test("displays information about the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repository} />);

  for (const value of Object.values(repository)) {
    const element = screen.getByText(new RegExp(value));

    expect(element).toBeInTheDocument();
  }
});
