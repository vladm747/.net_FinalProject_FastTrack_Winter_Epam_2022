﻿using Forum_DAL.UoW;
using ForumBLL.DTO;
using ForumBLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Forum.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRoleController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IRoleService _roleService;

        public UserRoleController(IUserService userService, IRoleService roleService)
        {
            _userService = userService;
            _roleService = roleService;
        }

        [HttpPost("createRole")]
        public async Task<IActionResult> CreateRole(CreateRoleDTO model)
        {
            await _roleService.CreateRole(model.RoleName);
            return Ok();
        }

        [HttpGet("getRoles")]
        public async Task<IActionResult> GetRoles()
        {
            return Ok(await _roleService.GetRoles());
        }

        [HttpPost("assignUserToRole")]
        public async Task<IActionResult> AssignUserToRole(AssignUserToRoleDTO model)
        {
            await _userService.AssignUserToRoles(new AssignUserToRoleDTO
            {
                Email = model.Email,
                Roles = model.Roles
            });

            return Ok();
        }
    }
}