using TestAppAPI.Models;

namespace TestAppAPI.Services
{
    public class AnswerService
    {
        private static List<Answer> s_answers;
        private static int s_nextId = 0;

        static AnswerService()
        {
            s_answers = new List<Answer>
            {
                new Answer {Id = 0, QuestionId = 0, Text = "easy fix", AnsBy = "Everyone", AnsAt = "Jan 02 2001 @ 21:00:02" }
            };
        }

        public static List<Answer> GetAll() => s_answers;

        public static List<Answer> GetAnswers(int questionId) => s_answers.Where(ans => ans.QuestionId == questionId).ToList();

        public static Answer? Get(int id) => s_answers.FirstOrDefault(ans => ans.Id == id);

        public static int Add(Answer answer)
        {
            answer.Id = s_nextId++;
            s_answers.Add(answer);
            return answer.Id;
        }
    }
}
