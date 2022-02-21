﻿using Forum_DAL.Entities;
using ForumDAL.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ForumBLL.Interfaces
{
    public interface IMessageService
    {
        IEnumerable<MessageDTO> GetMessageListByTopicIdAsync(int topicId);
        Task AddMessageAsync(MessageDTO message, string email);
        Task DeleteMessageAsync(Message message);
        Task UpdateMessageAsync(Message message);
        Task<MessageDTO> GetMessageByIdAsync(int id);
        Task DeleteMessageByIdAsync(int id);
    }
}
