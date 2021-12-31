using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class CompensationController : ControllerBase
{
  private readonly ILogger<CompensationController> _logger;

  public CompensationController(ILogger<CompensationController> logger)
  {
    _logger = logger;
  }

  // Randomly generate a dollar amount and return it as a string.
  [HttpGet(Name = "GetCompensation")]
  public string Get()
  {
    // Generate a random number between $100,000 and $250,000

    int compensation = System.Random.Shared.Next(100000, 250000);

    return $"${compensation:N}"; // Hard coded for now.
  }
}