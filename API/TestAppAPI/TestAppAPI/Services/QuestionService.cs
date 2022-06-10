using TestAppAPI.Models;

namespace TestAppAPI.Services
{
    public static class QuestionService
    {
        private static List<Question> s_questions;
        private static int s_nextId = 2;

        static QuestionService()
        {
            s_questions = new List<Question>
            {
                new Question { Id = 0, AskedAt = "Jan 01 2000 @ 1:00:00", AskedBy = "Shreyas", Title = "help", Text = "aaaaaaaa" },
                new Question { Id = 1, AskedAt = "Jan 01 1970 @ 1:00:00",  AskedBy = "Anonymous", Title = "EZ", Text = "bbbbbbb" }
            };

        }

        public static List<Question> GetAll() => s_questions;

        public static Question? Get(int id) => s_questions.FirstOrDefault(x => x.Id == id);

        public static List<Question> Search(string[] queryWords)
        {
            return s_questions.Where(q =>
            {
                bool isValid = true;
                foreach (var word in queryWords)
                {
                    if(!(q.Text!.Contains(word) || q.Title!.Contains(word)))
                    {
                        isValid = false;
                        break;
                    }
                }
                return isValid;
            }).ToList();
        }
        public static int Add(Question question)
        {
            question.Id = s_nextId++;
            s_questions.Add(question);
            return question.Id;
        }

        public static bool Delete(int id)
        {
            var question = Get(id);
            if(question != null)
            {
                return s_questions.Remove(question);
            }
            return false;
        }

        public static void Update(Question question)
        {
            int index = s_questions.FindIndex(q => q.Id == question.Id);
            if (index == -1) return;
            s_questions[index] = question;
        }
    }
}
