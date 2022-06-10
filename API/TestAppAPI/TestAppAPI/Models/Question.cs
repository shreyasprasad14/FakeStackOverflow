namespace TestAppAPI.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
        public string? AskedBy { get; set; }
        public string? AskedAt { get; set; }

    }
}
