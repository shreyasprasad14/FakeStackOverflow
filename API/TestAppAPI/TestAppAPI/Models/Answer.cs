namespace TestAppAPI.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int QuestionId { get; set; }
        public string? Text { get; set; }
        public string? AnsBy { get; set; }
        public string? AnsAt { get; set; }
    }
}
