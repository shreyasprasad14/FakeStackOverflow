using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestAppAPI.Models;
using TestAppAPI.Services;

namespace TestAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswerController : ControllerBase
    {
        [HttpGet("{id}")]
        public ActionResult<Answer> Get(int id)
        {
            Answer? res = AnswerService.Get(id);

            if (res == null) return NotFound();

            return Ok(res);
        }

        [HttpGet("question/{questionId}")]
        public ActionResult<List<Answer>> GetAnswers(int questionId)
        {
            List<Answer> res = AnswerService.GetAnswers(questionId);

            if (res.Count == 0) return NotFound();

            return Ok(res);
        }

        [HttpPost]
        public IActionResult AddAnswer(Answer answer)
        {
            int id = AnswerService.Add(answer);
            return CreatedAtAction("Get", new { id }, answer);
        }
    }
}
