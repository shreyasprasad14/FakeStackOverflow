using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestAppAPI.Models;
using TestAppAPI.Services;

namespace TestAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        [HttpGet]
        public ActionResult<List<Question>> GetAll() => QuestionService.GetAll();

        [HttpGet("{id}")]
        public ActionResult<Question> Get(int id)
        {
            var question = QuestionService.Get(id);

            if (question == null) return NotFound();

            return Ok(question);
        }

        [HttpGet("search/{query}")]
        public ActionResult<List<Question>> Search(string query)
        {
            string[] queryWords = query.Split(',');
            var res = QuestionService.Search(queryWords);

            if(res == null) return NotFound();
            return Ok(res);
        }

        [HttpPost]
        public IActionResult Create(Question question)
        {
            int id = QuestionService.Add(question);
            return CreatedAtAction("Get", new { id },question);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var success = QuestionService.Delete(id);
            if(!success) return NotFound();
            return Ok();
        }
    }
}
