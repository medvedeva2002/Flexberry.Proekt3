﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оценка подробно.
    /// </summary>
    // *** Start programmer edit section *** (ОценкаПодробно CustomAttributes)

    // *** End programmer edit section *** (ОценкаПодробно CustomAttributes)
    [AutoAltered()]
    [Caption("Оценка подробно")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОценкаПодробноE", new string[] {
            "Номер as \'Номер\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИО as \'ФИО\'",
            "Сотрудники.Должность as \'Должность\'",
            "Оценка as \'Оценка\'",
            "Оценка.ДатаПроведения as \'Дата проведения\'",
            "Оценка.Статус as \'Статус\'",
            "Оценка.Комментарий as \'Комментарий\'"}, Hidden=new string[] {
            "Сотрудники.ФИО",
            "Оценка.Комментарий"})]
    [MasterViewDefineAttribute("ОценкаПодробноE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ОценкаПодробноE", "Оценка", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Комментарий")]
    public class ОценкаПодробно : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.Proekt3.Сотрудники fСотрудники;
        
        private IIS.Proekt3.Оценка fОценка;
        
        private IIS.Proekt3.ОтчётОбОценке fОтчётОбОценке;
        
        // *** Start programmer edit section *** (ОценкаПодробно CustomMembers)

        // *** End programmer edit section *** (ОценкаПодробно CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (ОценкаПодробно.Номер CustomAttributes)

        // *** End programmer edit section *** (ОценкаПодробно.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (ОценкаПодробно.Номер Get start)

                // *** End programmer edit section *** (ОценкаПодробно.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (ОценкаПодробно.Номер Get end)

                // *** End programmer edit section *** (ОценкаПодробно.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОценкаПодробно.Номер Set start)

                // *** End programmer edit section *** (ОценкаПодробно.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (ОценкаПодробно.Номер Set end)

                // *** End programmer edit section *** (ОценкаПодробно.Номер Set end)
            }
        }
        
        /// <summary>
        /// Оценка подробно.
        /// </summary>
        // *** Start programmer edit section *** (ОценкаПодробно.Оценка CustomAttributes)

        // *** End programmer edit section *** (ОценкаПодробно.Оценка CustomAttributes)
        [PropertyStorage(new string[] {
                "Оценка"})]
        [NotNull()]
        public virtual IIS.Proekt3.Оценка Оценка
        {
            get
            {
                // *** Start programmer edit section *** (ОценкаПодробно.Оценка Get start)

                // *** End programmer edit section *** (ОценкаПодробно.Оценка Get start)
                IIS.Proekt3.Оценка result = this.fОценка;
                // *** Start programmer edit section *** (ОценкаПодробно.Оценка Get end)

                // *** End programmer edit section *** (ОценкаПодробно.Оценка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОценкаПодробно.Оценка Set start)

                // *** End programmer edit section *** (ОценкаПодробно.Оценка Set start)
                this.fОценка = value;
                // *** Start programmer edit section *** (ОценкаПодробно.Оценка Set end)

                // *** End programmer edit section *** (ОценкаПодробно.Оценка Set end)
            }
        }
        
        /// <summary>
        /// Оценка подробно.
        /// </summary>
        // *** Start programmer edit section *** (ОценкаПодробно.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ОценкаПодробно.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Proekt3.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ОценкаПодробно.Сотрудники Get start)

                // *** End programmer edit section *** (ОценкаПодробно.Сотрудники Get start)
                IIS.Proekt3.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ОценкаПодробно.Сотрудники Get end)

                // *** End programmer edit section *** (ОценкаПодробно.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОценкаПодробно.Сотрудники Set start)

                // *** End programmer edit section *** (ОценкаПодробно.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ОценкаПодробно.Сотрудники Set end)

                // *** End programmer edit section *** (ОценкаПодробно.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Proekt3.ОтчётОбОценке.
        /// </summary>
        // *** Start programmer edit section *** (ОценкаПодробно.ОтчётОбОценке CustomAttributes)

        // *** End programmer edit section *** (ОценкаПодробно.ОтчётОбОценке CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ОтчётОбОценке"})]
        public virtual IIS.Proekt3.ОтчётОбОценке ОтчётОбОценке
        {
            get
            {
                // *** Start programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Get start)

                // *** End programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Get start)
                IIS.Proekt3.ОтчётОбОценке result = this.fОтчётОбОценке;
                // *** Start programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Get end)

                // *** End programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Set start)

                // *** End programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Set start)
                this.fОтчётОбОценке = value;
                // *** Start programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Set end)

                // *** End programmer edit section *** (ОценкаПодробно.ОтчётОбОценке Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОценкаПодробноE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОценкаПодробноE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОценкаПодробноE", typeof(IIS.Proekt3.ОценкаПодробно));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ОценкаПодробно.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfОценкаПодробно CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfОценкаПодробно CustomAttributes)
    public class DetailArrayOfОценкаПодробно : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Proekt3.DetailArrayOfОценкаПодробно members)

        // *** End programmer edit section *** (IIS.Proekt3.DetailArrayOfОценкаПодробно members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ОценкаПодробно by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ОценкаПодробно.
        /// </summary>
        public DetailArrayOfОценкаПодробно(IIS.Proekt3.ОтчётОбОценке fОтчётОбОценке) : 
                base(typeof(ОценкаПодробно), ((ICSSoft.STORMNET.DataObject)(fОтчётОбОценке)))
        {
        }
        
        public IIS.Proekt3.ОценкаПодробно this[int index]
        {
            get
            {
                return ((IIS.Proekt3.ОценкаПодробно)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Proekt3.ОценкаПодробно dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
