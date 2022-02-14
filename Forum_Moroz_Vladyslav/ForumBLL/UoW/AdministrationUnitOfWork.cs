﻿using ForumBLL.Interfaces;
using ForumBLL.Services;
using ForumDAL.Entities.Auth;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace ForumBLL.UoW
{
    public class AdministrationUnitOfWork
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly SignInManager<User> _signInManager;

        private IUserService _userService;
        private IRoleService _roleService;
        private IAuthService _authService;

        public AdministrationUnitOfWork(UserManager<User> userManager, RoleManager<IdentityRole> roleManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
        }
        public IUserService UserService
        {
            get
            {
                if (_userService == null)
                    _userService = new UserService(_userManager);
                return _userService;
            }
        }
        public IRoleService RoleService
        {
            get
            {
                if (_roleService == null)
                    _roleService = new RoleService(_roleManager, _userManager);
                return _roleService;
            }
        }
        public IAuthService AuthService
        {
            get
            {
                if (_authService == null)
                    _authService = new AuthService(_userManager, _roleManager, _signInManager);
                return _authService;
            }
        }
    }
}
